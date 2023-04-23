using lazy_days_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace lazy_days_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class BellmanController : ControllerBase
	{
		private readonly IConfiguration _configuration;

		public BellmanController(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
			try
			{

				return Ok();
			} catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		} 

		private SqlCommand TestConnect()
		{
			string query = @"INSERT INTO DBO.DOAN VALUES (@MA_DOAN, @TEN_DOAN, @TEN_NGUOI_DK, @NGAY_DEN, @SO_NGUOI, @SO_DEM)";
			DataTable table = new DataTable();
			string sqlDataSource = _configuration.GetConnectionString("Database");
			SqlConnection myCon = new SqlConnection(sqlDataSource);
			return new SqlCommand(query, new SqlConnection(sqlDataSource)); 
		}
	}
}
