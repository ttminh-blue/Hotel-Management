using Dapper;
using lazy_days_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace lazy_days_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class PhongController : ControllerBase
	{
        private readonly IConfiguration _configuration;
        public PhongController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("Phone")]
        public IActionResult GetProfileRoomByPhone(int? phone)
        {
            string sqlDataSource = _configuration.GetConnectionString("Database");

            using (var conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                if (phone == null)
                {
                    return Ok();
                }
                else
                {
                    string query = "SELECT MA_GOI_DV FROM PHIEUDATPHONG PDP JOIN KHACHHANG KH ON PDP.MA_KH = KH.MA_KH AND KH.SDT = @SDT AND PDP.TRANGTHAI = N'Đang sử dụng' ";
                    string Gdv = conn.QueryFirstOrDefault<string>(query,new {SDT = phone});
                    return Ok(Gdv);
                }
            }
        }
    }
}
