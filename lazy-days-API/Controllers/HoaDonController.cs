using lazy_days_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace lazy_days_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoaDonController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public HoaDonController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from dbo.HOADON";
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
        public JsonResult Post(Hoadon hd)
        {
            string query = @"INSERT INTO DBO.HOADON VALUES (@MaHd, @NgayLap, @TienDv, @TienPhatsinh, @TongTien, @NhanVienLap, @MaPhieuDp)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Database");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@MaHd", hd.MaHd);
                    myCommand.Parameters.AddWithValue("@NgayLap", hd.NgayLap);
                    myCommand.Parameters.AddWithValue("@TienDv", hd.TienDv);
                    myCommand.Parameters.AddWithValue("@TienPhatsinh", hd.TienPhatsinh);
                    myCommand.Parameters.AddWithValue("@TongTien", hd.TongTien);
                    myCommand.Parameters.AddWithValue("@NhanVienLap", hd.NhanVienLap);
                    myCommand.Parameters.AddWithValue("@MaPhieuDp", hd.MaPhieuDp);



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
