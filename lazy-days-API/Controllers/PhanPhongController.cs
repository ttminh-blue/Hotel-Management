using lazy_days_API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
namespace lazy_days_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class PhanPhong : ControllerBase
	{
		private readonly IConfiguration _configuration;

		public PhanPhong(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		[HttpGet]
		public JsonResult Get()
		{
			string query = @"select * from dbo.PHANPHONG";
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
		public JsonResult Post(Phanphong pp)
		{
			try
			{
				string query = @"INSERT INTO DBO.PHANPHONG VALUES (@MaNvql, @MaPhieuDp, 
                @MaPhong, @NgayPhanPhong, @NgayNhan);

						UPDATE PHONG SET TRANG_THAI='Booked' WHERE MA_PHONG=@MaPhong;
						UPDATE PHIEUDATPHONG SET TRANGTHAI='Received';
						INSERT INTO CHITIETPHONG VALUES (@MaPhong,(SELECT MA_KH FROM PHIEUDATPHONG,PHANPHONG
						WHERE PHIEUDATPHONG.MA_PHIEU_DP=PHANPHONG.MA_PHIEU_DP AND PHANPHONG.MA_PHONG=@MaPhong));";
				DataTable table = new DataTable();
				string sqlDataSource = _configuration.GetConnectionString("Database");
				SqlDataReader myReader;
				using (SqlConnection myCon = new SqlConnection(sqlDataSource))
				{
					myCon.Open();
					using (SqlCommand myCommand = new SqlCommand(query, myCon))
					{
						myCommand.Parameters.AddWithValue("@MaNvql", pp.MA_NVQL);
						myCommand.Parameters.AddWithValue("@MaPhieuDp", pp.MA_PHIEU_DP);
						myCommand.Parameters.AddWithValue("@MaPhong", pp.MA_PHONG);
						myCommand.Parameters.AddWithValue("@NgayPhanPhong", DateTime.Now);
						myCommand.Parameters.AddWithValue("@NgayNhan", DateTime.Now);
						myReader = myCommand.ExecuteReader();
						table.Load(myReader);
						myReader.Close();
						myCon.Close();
					}
				}
				return new JsonResult("Add Succesfully");
			}
			catch (Exception ex)
			{
				return new JsonResult(ex.Message);
			}


		}
	}
}
