using Dapper;
using lazy_days_API.Models;
using lazy_days_API.Services;
using Microsoft.AspNetCore.Connections;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Runtime.Intrinsics.Arm;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace lazy_days_API.Controllers
{
    [Route("booking/[controller]")]
    [ApiController]
    public class Booking : ControllerBase
    {
        private readonly IService _connectionFactory;

        public Booking(IService connection)
        {
            _connectionFactory = connection;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
                string queryString = "Select * from PHIEUDATPHONG";
                var result = await sqlConnection.QueryAsync(queryString);
                if (result == null) return NotFound();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPost]
        public async Task<IActionResult> Post(Phieudatphong DP)
        {
            try {
                await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
                string query = $"Select GIATIEN from LOAIPHONG WHERE LOAIPHONG='{DP.Loaiphong}'";
                int giatien = await sqlConnection.QueryFirstOrDefaultAsync<int>(query);
                DP.TienCoc = giatien * 0.3;
                string queryStr = @"INSERT INTO DBO.PHIEUDATPHONG VALUES (@MaPhieuDp, @MaKh, 
                @MaNv, @NgayDat, @TongTien,@TienCoc,@Loaiphong,@NgayTraPhong)";

                var count = await sqlConnection.QueryAsync("Select * from NHANVIEN");
                if (count == null) return NotFound();
                int maxId = count.Count() + 1;
                string newId = "PH";
                if (maxId <= 9)
                {
                    newId += "00" + maxId.ToString();
                }
                else if (maxId <= 99)
                {
                    newId += "0" + maxId.ToString();
                }
                else if (maxId <= 999)
                {
                    newId += maxId.ToString();
                }

                DP.MaPhieuDp = newId;
                await sqlConnection.ExecuteAsync(queryStr, DP);
                return Ok(query + queryStr);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut]
        public async Task<IActionResult> Put(Phieudatphong DP)
        {
            try
            {
                await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
                string queryStr = @"UPDATE DBO.PHIEUDATPHONG SET MA_KH=@MaKh, 
                MA_NV=@MaNv, NGAY_DAT=@NgayDat,TONG_TIEN= @TongTien,TIEN_COC=@TienCoc,LOAIPHONG=@Loaiphong,NGAY_TRA_PHONG=@NgayTraPhong WHERE MA_PHIEU_DP=@MaPhieuDp ";
                await sqlConnection.ExecuteAsync(queryStr, DP);
                return Ok("UPDATE successfully.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
