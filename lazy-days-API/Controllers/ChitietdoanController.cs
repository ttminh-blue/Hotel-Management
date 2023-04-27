using lazy_days_API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
namespace lazy_days_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChitietdoanController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ChitietdoanController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from dbo.Chitietdoan";
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
        public JsonResult Post(Chitietdoan ct_doan)
        {
            string query = @"INSERT INTO DBO.Chitietdoan VALUES (@MA_KH, @MA_DOAN)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Database");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@MA_DOAN", ct_doan.MaDoan);
                    myCommand.Parameters.AddWithValue("@MA_KH", ct_doan.MaKh);
                    


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
