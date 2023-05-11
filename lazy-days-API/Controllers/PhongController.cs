using Dapper;
using lazy_days_API.Models;
using lazy_days_API.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace lazy_days_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class PhongController : ControllerBase
	{
		private readonly IService _sqlFactory;

		public PhongController(IService sqlFactory)
		{
			_sqlFactory = sqlFactory;
		}


		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
			try
			{
				await using SqlConnection connection = _sqlFactory.CreateConnection();
				var result = await connection.QueryAsync("Select * from Phong");
				if (result == null) return NotFound();
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
		[HttpGet("CMND")]
		public async Task<IActionResult> GetCMND(string cmnd)
		{
			try
			{
				await using SqlConnection connection = _sqlFactory.CreateConnection();
				var result = await connection.QueryAsync($"select phong.* from phong, chitietphong,KHACHHANG where phong.MA_PHONG=CHITIETPHONG.MA_PHONG and CHITIETPHONG.MA_KH=KHACHHANG.MA_KH and KHACHHANG.CMND like '%{cmnd}%'");
				if (result == null) return NotFound();
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
		[HttpGet("customers")]
		public async Task<IActionResult> GetCustomer(string phong)
		{
			try
			{
				await using SqlConnection connection = _sqlFactory.CreateConnection();
				var result = await connection.QueryAsync("Select KHACHHANG.* from Chitietphong,KHACHHANG where Chitietphong.MA_PHONG=@PHONG AND KHACHHANG.MA_KH=CHITIETPHONG.MA_KH", new { PHONG = phong });
				if (result == null) return NotFound();
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
		[HttpPost("update")]
		public async Task<IActionResult> UpdateRoom(string phong)
		{
			try
			{
				await using SqlConnection connection = _sqlFactory.CreateConnection();
				var result = await connection.ExecuteAsync("UPDATE PHONG SET TRANG_THAI='Occupied' WHERE MA_PHONG=@Phong", new { Phong = phong });

				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
		[HttpPost("add")]
		public async Task<IActionResult> AddMem(string phong, string makh)
		{
			try
			{
				await using SqlConnection connection = _sqlFactory.CreateConnection();
				var result = await connection.ExecuteAsync("INSERT INTO CHITIETPHONG VALUES(@phong,@makh)", new { phong = phong, makh = makh });
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
		[HttpOptions]
		public async Task<IActionResult> GetGuarantee()
		{
			try
			{
				await using SqlConnection connection = _sqlFactory.CreateConnection();
				var result = await connection.QueryAsync("Select * from Phong where TRANG_THAI='Available' and LOAI='GUARANTEE'");
				if (result == null) return NotFound();
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
		[HttpPut]
		public async Task<IActionResult> GetNotGuarantee()
		{
			try
			{
				await using SqlConnection connection = _sqlFactory.CreateConnection();
				var result = await connection.QueryAsync("Select * from Phong where TRANG_THAI='Available' and LOAI='NOT GUARANTEE'");
				if (result == null) return NotFound();
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpGet("{Id}")]
		public async Task<IActionResult> Get([FromRoute] string Id)
		{
			try
			{
				await using SqlConnection connection = _sqlFactory.CreateConnection();
				var result = await connection.QueryFirstOrDefaultAsync("Select * from Phong where MA_PHONG = @Id", new
				{
					Id = Id
				});
				if (result == null) return NotFound();
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpPost]
		public async Task<IActionResult> Post(Phong phong)
		{
			try
			{
				await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();
				var allPhong = await sqlConnection.QueryAsync("Select * from Phong");
				if (allPhong == null) return NotFound();
				int maxId = allPhong.Count() + 1;
				string newId = "P";
				if (maxId <= 9)
				{
					newId += "000" + maxId.ToString();
				}
				else if (maxId <= 99)
				{
					newId += "00" + maxId.ToString();
				}
				else if (maxId <= 999)
				{
					newId += "0" + maxId.ToString();
				}
				else
				{
					newId += maxId.ToString();
				}

				phong.MA_PHONG = newId;


				string queryStr = "Insert into Phong(MA_PHONG, TEN_PHONG, SO_LUONG_DAP_UNG, LOAI, TRANG_THAI) " +
					"VALUES (@MA_PHONG, @TEN_PHONG, @SO_LUONG_DAP_UNG, @LOAI, @TRANG_THAI)";

				await sqlConnection.ExecuteAsync(queryStr, phong);

				return Ok("Added successfully .");

			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
	}
}
