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
	public class TaikhoanController : ControllerBase
	{
		private readonly IService _sqlFactory;
		private readonly IConfiguration _config;

		public TaikhoanController(IService sqlFactory, IConfiguration config)
		{
			_sqlFactory = sqlFactory;
			_config = config;
		}
		[HttpGet]
		public JsonResult Get()
		{
			string query = @"select TK.*, NV.CHUC_VU from TAIKHOAN  TK join NHANVIEN NV on NV.MA_NV = TK.MA_NV";
			DataTable table = new DataTable();
			string sqlDataSource = _config.GetConnectionString("Database");
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
		public async Task<IActionResult> DANGNHAP(Taikhoan tk)
		{
			try
			{
				await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();
				var taikhoan = await sqlConnection.QueryAsync("Select * from TAIKHOAN where TEN_TAIKHOAN = @TEN_TK and MATKHAU = @MK", new
				{
					TEN_TK = tk.TenTaikhoan,
					MK = tk.Matkhau
				});
				if (taikhoan.Count() >= 1)
				{
					return Ok(taikhoan);
				}
				else
				{
					return BadRequest("Failed");
				}

			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
	}
}
