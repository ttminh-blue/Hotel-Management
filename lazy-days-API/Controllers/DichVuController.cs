using Dapper;
using lazy_days_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace lazy_days_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DichVuController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public DichVuController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("HotelService")]
        public IActionResult GetHotelService()
        {
            string sqlDataSource = _configuration.GetConnectionString("Database");

            using (var conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                string query = "select * from DICHVUKHACHSAN WHERE LOAI = 'DVKS'";
                List<Dichvukhachsan> ListHotelService = conn.Query<Dichvukhachsan>(query).ToList();
                return Ok(ListHotelService);
            }
        }
        [HttpGet("Product")]
        public IActionResult GetProduct()
        {
            string sqlDataSource = _configuration.GetConnectionString("Database");

            using (var conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                string query = "select * from DICHVUKHACHSAN WHERE LOAI = 'SP'";
                List<Dichvukhachsan> ListHotelService = conn.Query<Dichvukhachsan>(query).ToList();
                return Ok(ListHotelService);
            }
        }
    }
}
