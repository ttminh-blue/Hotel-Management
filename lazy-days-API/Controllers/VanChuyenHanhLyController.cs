using Dapper;
using lazy_days_API.Models;
using lazy_days_API.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace lazy_days_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class VanChuyenHanhLyController : ControllerBase
	{
		private readonly IService _sqlFactory;

		public VanChuyenHanhLyController(IService sqlFactory)
		{
			_sqlFactory = sqlFactory;
		}

		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
			try
			{
				await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();
				string queryStr = "Select * from PHIEUDANGKYVANCHUYEN";
				var result = await sqlConnection.QueryAsync(queryStr);
				if (result == null) { return NotFound(); }
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
				await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();
				string queryStr = "Select * from PHIEUDANGKYVANCHUYEN Where MA_PHIEUDANGKYVANCHUYEN = @Id";
				var result = await sqlConnection.QueryAsync(queryStr, new
				{
					Id = Id,
				});
				if (result == null) { return NotFound(); };
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpPost]
		public async Task<IActionResult> AddPhieuDangKyVanChuyen(Phieudangkyvanchuyen phieudangkyvanchuyen)
		{
			try
			{
				await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();
				var allPhieuDKVC = await sqlConnection.QueryAsync("Select * from PHIEUDANGKYVANCHUYEN");
				if (allPhieuDKVC == null) return NotFound();
				int maxId = allPhieuDKVC.Count() + 1;
				string newId = "PVC";
				if (maxId <= 9)
				{
					newId += "0" + maxId.ToString();
				}
				else if (maxId <= 99)
				{
					newId += maxId.ToString();
				}

				phieudangkyvanchuyen.MA_PHIEUDANGKYVANCHUYEN = newId;


				string queryStr = "Insert into PHIEUDANGKYVANCHUYEN(MA_PHIEUDANGKYVANCHUYEN, MA_PHONG, MA_PHIEU_DP, " +
					"MA_NV, NGAY_TAO, SO_LUONG, HANHLY) VALUES (@MA_PHIEUDANGKYVANCHUYEN, @MA_PHONG, @MA_PHIEU_DP, @MA_NV, @NGAY_TAO, @SO_LUONG, @HANH_LY)";
				await sqlConnection.ExecuteAsync(queryStr, phieudangkyvanchuyen);
				return Ok("Added successfully.");
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}


	}
}
