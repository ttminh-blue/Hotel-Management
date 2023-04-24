using lazy_days_API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
namespace lazy_days_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class YeucaudacbietController : ControllerBase
	{
		private readonly IConfiguration _configuration;

		public YeucaudacbietController(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		[HttpGet]
		public JsonResult Get()
		{
			string query = @"select * from dbo.YEUCAUDACBIET";
			DataTable table = new DataTable();
			string sqlDataSource = _configuration.GetConnectionString("Database");
			SqlDataReader myReader;
			using (SqlConnection myCon = new SqlConnection(sqlDataSource))
			{
				myCon.Open();
				using (SqlCommand myCommand = new SqlCommand(query, myCon))
				{
					myReader = myCommand.ExecuteReader();
					table.Load(myReader);
					myReader.Close();
					myCon.Close();
				}
			}
			return new JsonResult(table);
		}
		[HttpPost]
		public IActionResult Post(Yeucaudacbiet yc)
		{
			string query = @"INSERT INTO DBO.YEUCAUDACBIET VALUES (@MA_YC, @MA_KH, @TEN_YC)";
			DataTable table = new DataTable();
			string sqlDataSource = _configuration.GetConnectionString("Database");
			SqlDataReader myReader;
			try
			{
				using (SqlConnection myCon = new SqlConnection(sqlDataSource))
				{
					myCon.Open();
					using (SqlCommand myCommand = new SqlCommand(query, myCon))
					{

						myCommand.Parameters.AddWithValue("@MA_YC", yc.MaYcdc);
						myCommand.Parameters.AddWithValue("@MA_KH", yc.MaKh);
						myCommand.Parameters.AddWithValue("@TEN_YC", yc.TenYcdc);


						myReader = myCommand.ExecuteReader();
						table.Load(myReader);
						myReader.Close();
						myCon.Close();
					}
				}
				return Ok(new JsonResult("Add Succesfully"));
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}


		}
	}
}
