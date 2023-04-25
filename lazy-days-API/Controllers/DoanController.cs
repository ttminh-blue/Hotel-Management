using lazy_days_API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
namespace lazy_days_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class DoanController : ControllerBase
	{
		private readonly IConfiguration _configuration;

		public DoanController(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		[HttpGet]
		public JsonResult Get()
		{
			string query = @"select * from dbo.DOAN";
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
		public JsonResult Post(Doan doan)
		{
			string query = @"INSERT INTO DBO.DOAN VALUES (@MA_DOAN, @TEN_DOAN, @TEN_NGUOI_DK, @NGAY_DEN, @SO_NGUOI, @SO_DEM)";
			DataTable table = new DataTable();
			string sqlDataSource = _configuration.GetConnectionString("Database");
			SqlDataReader myReader;
			using (SqlConnection myCon = new SqlConnection(sqlDataSource))
			{
				myCon.Open();
				using (SqlCommand myCommand = new SqlCommand(query, myCon))
				{

					myCommand.Parameters.AddWithValue("@MA_DOAN", doan.MaDoan);
					myCommand.Parameters.AddWithValue("@TEN_DOAN", doan.TenDoan);
					myCommand.Parameters.AddWithValue("@TEN_NGUOI_DK", doan.TenNguoiDk);
					myCommand.Parameters.AddWithValue("@NGAY_DEN", doan.NgayDen);
					myCommand.Parameters.AddWithValue("@SO_NGUOI", doan.SoNguoi);
					myCommand.Parameters.AddWithValue("@SO_DEM", doan.SoDemLuuTru);


					myReader = myCommand.ExecuteReader();
					table.Load(myReader);
					myReader.Close();
					myCon.Close();
				}
			}
			return new JsonResult("Add Succesfully");

		}
	}
}
