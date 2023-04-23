using lazy_days_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
namespace lazy_days_API.Controllers
{
    [Route("grant/[controller]")]
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
            string query = @"INSERT INTO DBO.PHANPHONG VALUES (@MaNvql, @MaPhieuDp, 
                @MaPhong, @NgayPhanPhong, @NgayNhan)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Database");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@MaNvql", pp.MaNvql);
                    myCommand.Parameters.AddWithValue("@MaPhieuDp", pp.MaPhieuDp);
                    myCommand.Parameters.AddWithValue("@MaPhong", pp.MaPhong);
                    myCommand.Parameters.AddWithValue("@NgayPhanPhong", pp.NgayPhanPhong);
                    myCommand.Parameters.AddWithValue("@NgayNhan", pp.NgayNhan);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Add Succesfully");

        }
        [HttpPut]
        public JsonResult Put(Phanphong pp)
        {
            string query = @"INSERT INTO DBO.KHACHHANG VALUES (@MaNvql, @MaPhieuDp, 
                @MaPhong, @NgayPhanPhong, @NgayNhan)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Database");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@MaNvql", pp.MaNvql);
                    myCommand.Parameters.AddWithValue("@MaPhieuDp", pp.MaPhieuDp);
                    myCommand.Parameters.AddWithValue("@MaPhong", pp.MaPhong);
                    myCommand.Parameters.AddWithValue("@NgayPhanPhong", pp.NgayPhanPhong);
                    myCommand.Parameters.AddWithValue("@NgayNhan", pp.NgayNhan);

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
