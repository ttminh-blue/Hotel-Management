using lazy_days_API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using lazy_days_API.Services;
using Dapper;

namespace lazy_days_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KhachHangController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IService _sqlFactory;

        public KhachHangController(IConfiguration configuration, IService sqlFactory)
        {
            _configuration = configuration;
            _sqlFactory = sqlFactory;
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
        [HttpGet("add")]
        public JsonResult GetAL()
        {
            string query = @"select * from khachhang kh where not exists (select * from chitietphong ct where kh.MA_KH=ct.MA_KH)";
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
        public async Task<IActionResult> Post(Khachhang kh)
        {
            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();
            var allPhieuDKVC = await sqlConnection.QueryAsync("Select * from DBO.KHACHHANG WHERE CMND = @Cmnd" , new
            {
                Cmnd = kh.Cmnd
            });
            if (allPhieuDKVC.Count() >= 1) return Ok("Existed User");
            string query = @"INSERT INTO DBO.KHACHHANG VALUES (@MA_KH, @TEN_KH, 
		@CMND, @DIA_CHI, @SDT, @Email, @Fax, @SO_DEM_LUU_TRU, @YEU_CAU_DB , N'Đang đặt phòng')";
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
                        myCommand.Parameters.AddWithValue("@MA_KH", kh.MaKh);
                        myCommand.Parameters.AddWithValue("@TEN_KH", kh.TenKh);
                        myCommand.Parameters.AddWithValue("@CMND", kh.Cmnd);
                        myCommand.Parameters.AddWithValue("@DIA_CHI", kh.DiaChi);
                        myCommand.Parameters.AddWithValue("@SDT", kh.Sdt);
                        myCommand.Parameters.AddWithValue("@Email", kh.Email);
                        myCommand.Parameters.AddWithValue("@Fax", kh.Fax);
                        myCommand.Parameters.AddWithValue("@SO_DEM_LUU_TRU", kh.SoDemLuuTru);
                        myCommand.Parameters.AddWithValue("@YEU_CAU_DB", kh.YeuCauDb);


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
        [HttpPut]
        public JsonResult Put(Khachhang kh)
        {

            string query = @"UPDATE DBO.KHACHHANG SET TRANG_THAI_DAT_PHONG = N'Checkin' WHERE MA_KH = @MA_KH";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Database");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@MA_KH", kh.MaKh);



                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("UPDATED  Succesfully");
        }
    }
}