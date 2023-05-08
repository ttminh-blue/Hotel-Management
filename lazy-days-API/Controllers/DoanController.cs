using Dapper;
using lazy_days_API.Models;
using lazy_days_API.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
namespace lazy_days_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class DoanController : ControllerBase
	{
        private readonly IService _sqlFactory;

        public DoanController(IService sqlFactory)
        {
            _sqlFactory = sqlFactory;
        }

        [HttpGet]
		public async Task<IActionResult> Get()
		{
			string query = @"select * from dbo.DOAN";
            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();

            var result = await sqlConnection.QueryAsync(query);
            return new JsonResult(result);
        }
		[HttpPost]
		public async Task<IActionResult> Post(Doan doan)
		{
			string query = @"INSERT INTO DBO.DOAN VALUES (@MA_DOAN, @TEN_DOAN, @TEN_NGUOI_DK, @NGAY_DEN, @SO_NGUOI, @SO_DEM)";
            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();
            await sqlConnection.ExecuteAsync(query, new
            {
                MA_DOAN = doan.MaDoan,
                TEN_DOAN = doan.TenDoan,
                TEN_NGUOI_DK = doan.TenNguoiDk,
                NGAY_DEN = doan.NgayDen,
                SO_NGUOI= doan.SoNguoi,
                SO_DEM = doan.SoDemLuuTru
            });


            /*DataTable table = new DataTable();
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
			}*/
            return new JsonResult("Add Succesfully");

		}
	}
}
