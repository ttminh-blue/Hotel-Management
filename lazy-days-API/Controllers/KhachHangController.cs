using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
namespace lazy_days_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class KhachHangController : ControllerBase
	{
		private readonly IConfiguration _configuration;

		public KhachHangController(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		[HttpGet]
		public JsonResult Get()
		{
			string query = @"select * from dbo.KHACHHANG";
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
		//		[HttpPost]
		//		public JsonResult Post(Khachhang kh)
		//		{
		//			string query = @"INSERT INTO DBO.KHACHHANG VALUES (@MA_KH, @TEN_KH, 
		//@CMND, @DIA_CHI, @SDT, @Email, @Fax, @NGAY_DEN, @SO_DEM_LUU_TRU, @LOAI_PHONG, NULL, NULL, NULL , N'Đang đặt phòng')";
		//			DataTable table = new DataTable();
		//			string sqlDataSource = _configuration.GetConnectionString("Database");
		//			SqlDataReader myReader;
		//			using (SqlConnection myCon = new SqlConnection(sqlDataSource))
		//			{
		//				myCon.Open();
		//				using (SqlCommand myCommand = new SqlCommand(query, myCon))
		//				{

		//					myCommand.Parameters.AddWithValue("@MA_KH", kh.MaKh);
		//					myCommand.Parameters.AddWithValue("@TEN_KH", kh.TenKh);
		//					myCommand.Parameters.AddWithValue("@CMND", kh.Cmnd);
		//					myCommand.Parameters.AddWithValue("@DIA_CHI", kh.DiaChi);
		//					myCommand.Parameters.AddWithValue("@SDT", kh.Sdt);
		//					myCommand.Parameters.AddWithValue("@Email", kh.Email);
		//					myCommand.Parameters.AddWithValue("@Fax", kh.Fax);
		//					myCommand.Parameters.AddWithValue("@NGAY_DEN", kh.NgayDen);
		//					myCommand.Parameters.AddWithValue("@SO_DEM_LUU_TRU", kh.SoDemLuuTru);
		//					myCommand.Parameters.AddWithValue("@LOAI_PHONG", kh.LoaiPhong);

		//					myReader = myCommand.ExecuteReader();
		//					table.Load(myReader);
		//					myReader.Close();
		//					myCon.Close();
		//				}
		//			}
		//			return new JsonResult("Add Succesfully");

		//		}
		//	[HttpPut]
		//	public JsonResult Put(Khachhang kh)
		//	{

		//		string query = @"UPDATE DBO.KHACHHANG SET TEN_KH = @TEN_KH, 
		//CMND = @CMND, DIA_CHI = @DIA_CHI, SDT = @SDT, Email = @Email, Fax = @Fax, NGAY_DEN = @NGAY_DEN,  SO_DEM_LUU_TRU = @SO_DEM_LUU_TRU, LOAI_PHONG = @LOAI_PHONG, LOAI_KH = @LOAI_KH WHERE MA_KH = @MAKH";
		//		DataTable table = new DataTable();
		//		string sqlDataSource = _configuration.GetConnectionString("Database");
		//		SqlDataReader myReader;
		//		using (SqlConnection myCon = new SqlConnection(sqlDataSource))
		//		{
		//			myCon.Open();
		//			using (SqlCommand myCommand = new SqlCommand(query, myCon))
		//			{

		//				myCommand.Parameters.AddWithValue("@MA_KH", kh.MaKh);
		//				myCommand.Parameters.AddWithValue("@TEN_KH", kh.TenKh);
		//				myCommand.Parameters.AddWithValue("@CMND", kh.Cmnd);
		//				myCommand.Parameters.AddWithValue("@DIA_CHI", kh.DiaChi);
		//				myCommand.Parameters.AddWithValue("@SDT", kh.Sdt);
		//				myCommand.Parameters.AddWithValue("@Email", kh.Email);
		//				myCommand.Parameters.AddWithValue("@Fax", kh.Fax);
		//				myCommand.Parameters.AddWithValue("@NGAY_DEN", kh.NgayDen);
		//				myCommand.Parameters.AddWithValue("@SO_DEM_LUU_TRU", kh.SoDemLuuTru);
		//				myCommand.Parameters.AddWithValue("@LOAI_PHONG", kh.LoaiPhong);
		//				myCommand.Parameters.AddWithValue("@LOAI_KH", kh.LoaiKh);

		//				myReader = myCommand.ExecuteReader();
		//				table.Load(myReader);
		//				myReader.Close();
		//				myCon.Close();
		//			}
		//		}
		//		return new JsonResult("UPDATED  Succesfully");

		//	}
	}
}
