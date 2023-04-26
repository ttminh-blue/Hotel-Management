using lazy_days_API.Models;
using lazy_days_API.Services;
using Microsoft.AspNetCore.Mvc;
using Dapper;

using System.Data.SqlClient;
namespace lazy_days_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaikhoanController : ControllerBase
    {
        private readonly IService _sqlFactory;

        public TaikhoanController(IService sqlFactory)
        {
            _sqlFactory = sqlFactory;
        }
        [HttpPost]
        public async Task<IActionResult> DANGNHAP(Taikhoan tk)
        {
            try
            {
                await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();
                var taikhoan = await sqlConnection.QueryAsync("Select * from TAIKHOAN where TEN_TAIKHOAN = @TEN_TK and MATKHAU = @MK" , new
                {
                    TEN_TK = tk.TenTaikhoan,
                    MK = tk.Matkhau
                });
                if (taikhoan.Count() >= 1)
                {
                    return Ok(taikhoan);
                }
                else
                {
                    return BadRequest("Failed");
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
