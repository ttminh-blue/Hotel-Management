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

		[HttpGet("{Id}")]
		public async Task<IActionResult> Get([FromRoute] string Id)
		{
			try
			{
				await using SqlConnection connection = _sqlFactory.CreateConnection();
				var result = await connection.QueryAsync("Select * from Phong where MA_PHONG = @Id", new
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

				phong.MaPhong = newId;



				string queryStr = "Insert into Phong(MA_PHONG, TEN_PHONG, SO_LUONG_DAP_UNG, LOAI, TRANG_THAI, GIA) " +
					"VALUES (@MaPhong, @TenPhong, @SoLuongDapUng, @Loai, @TrangThai, @Gia)";
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
