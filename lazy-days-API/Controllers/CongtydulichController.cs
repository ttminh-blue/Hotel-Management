using Dapper;
using lazy_days_API.Models;
using lazy_days_API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
namespace lazy_days_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CongtydulichController : ControllerBase
    {
        private readonly IService _sqlFactory;
       

        public CongtydulichController(IService sqlFactory)
        {
            _sqlFactory = sqlFactory;
         
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            string query = @"select * from dbo.CONGTYDULICH";

            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();

            var result = await sqlConnection.QueryAsync(query);
            return new JsonResult(result);
        }

        [HttpPost]
        public async Task<IActionResult> ThemCongTyDuLich(Congtydulich ctdl)
        {
            try
            {
                await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();
                var allPhieuDKVC = await sqlConnection.QueryAsync("Select * from CONGTYDULICH WHERE TEN_CTY = @TEN_CTY", new
                {
                    TEN_CTY= ctdl.TenCty
                });
                if (allPhieuDKVC.Count() >= 1) return Ok("Existed travel company");


                string query = @"INSERT INTO DBO.CONGTYDULICH VALUES (@MA_CTY, @TEN_CTY, @DIA_CHI)";
                await sqlConnection.ExecuteAsync(query, new
                {
                    MA_CTY = ctdl.MaCty,
                    TEN_CTY = ctdl.TenCty,
                    DIA_CHI = ctdl.DiaChi
                });

                /* DataTable table = new DataTable();
                 string sqlDataSource = _configuration.GetConnectionString("Database");
                 SqlDataReader myReader;
                 using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                 {
                     myCon.Open();
                     using (SqlCommand myCommand = new SqlCommand(query, myCon))
                     {

                         myCommand.Parameters.AddWithValue("@MA_CTY", ctdl.MaCty);
                         myCommand.Parameters.AddWithValue("@TEN_CTY", ctdl.TenCty);

                         myCommand.Parameters.AddWithValue("@DIA_CHI", ctdl.DiaChi);



                         myReader = myCommand.ExecuteReader();
                         table.Load(myReader);
                         myReader.Close();
                         myCon.Close();
                     }
                 }*/

                return Ok("Added successfully.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
