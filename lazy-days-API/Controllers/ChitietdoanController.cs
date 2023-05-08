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
    public class ChitietdoanController : ControllerBase
    {
        private readonly IService _sqlFactory;

        public ChitietdoanController(IService sqlFactory)
        {
            _sqlFactory = sqlFactory;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            string query = @"select * from dbo.Chitietdoan";
            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();

            var result = await sqlConnection.QueryAsync(query);
            return new JsonResult(result);
        
        }
        [HttpPost]
        public async Task<IActionResult> Post(Chitietdoan ct_doan)
        {
            string query = @"INSERT INTO DBO.Chitietdoan VALUES (@MA_KH, @MA_DOAN)";
            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();

            await sqlConnection.ExecuteAsync(query, new
            {
                MA_KH = ct_doan.MaKh,
                MA_DOAN = ct_doan.MaDoan
            });
            return new JsonResult("Add Succesfully");

        }
    }
}
