using Dapper;
using lazy_days_API.Models;
using lazy_days_API.Services;
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
        private readonly IService _sqlFactory;

        public HoaDonController(IService sqlFactory)
        {
            _sqlFactory = sqlFactory;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            string query = @"select * from dbo.HOADON";
            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();

            var result = await sqlConnection.QueryAsync(query);
            return new JsonResult(result);
        }
        [HttpPost]
        public async Task<IActionResult> Post(Hoadon hd)
        {
            string query = @"INSERT INTO DBO.HOADON VALUES (@MaHd, @NgayLap, @TienDv, @TienPhatsinh, @TongTien, @NhanVienLap, @MaPhieuDp)";
            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();

            await sqlConnection.ExecuteAsync(query, new
            {
                MaHd = hd.MaHd,
                NgayLap = hd.NgayLap,
                TienDv = hd.TienDv,
                TienPhatsinh = hd.TienPhatsinh,
                TongTien= hd.TongTien,
                NhanVienLap= hd.NhanVienLap,
                MaPhieuDp= hd.MaPhieuDp
            });
            return new JsonResult("Add Succesfully");

        }
    }
}
