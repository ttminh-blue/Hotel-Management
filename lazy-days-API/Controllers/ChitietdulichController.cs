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
    public class ChitietdulichController : ControllerBase
    {
       

        private readonly IService _sqlFactory;

        public ChitietdulichController(IService sqlFactory)
        {
            _sqlFactory = sqlFactory;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            string query = @"select * from dbo.Chitietdulich";
            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();

            var result = await sqlConnection.QueryAsync(query);
            return new JsonResult(result);
        }
        [HttpPost]
        public async Task<IActionResult> Post(Chitietdulich ct_dl)
        {
            string query = @"INSERT INTO DBO.Chitietdulich VALUES (@MA_KH,@MA_CTY, @TEN_NGUOI_DAI_DIEN)";

            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();

            await sqlConnection.ExecuteAsync(query, new
            {
                MA_KH = ct_dl.MaKh,
                MA_CTY = ct_dl.MaCty,
                TEN_NGUOI_DAI_DIEN= ct_dl.NguoiDaiDien
            });
            /* DataTable table = new DataTable();
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
             }*/
            return new JsonResult("Add Succesfully");

        }
    }
}
