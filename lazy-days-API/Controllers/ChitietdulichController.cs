using lazy_days_API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
namespace lazy_days_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChitietdulichController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ChitietdulichController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from dbo.Chitietdulich";
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
        public JsonResult Post(Chitietdulich ct_dl)
        {
            string query = @"INSERT INTO DBO.Chitietdulich VALUES (@MA_KH,@MA_CTY, @TEN_NGUOI_DAI_DIEN)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Database");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@MA_CTY", ct_dl.MaCty);
                    myCommand.Parameters.AddWithValue("@MA_KH", ct_dl.MaKh);
                    myCommand.Parameters.AddWithValue("@TEN_NGUOI_DAI_DIEN", ct_dl.NguoiDaiDien);



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
