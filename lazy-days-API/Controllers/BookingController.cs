using Dapper;
using lazy_days_API.Models;
using lazy_days_API.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace lazy_days_API.Controllers
{
    [Route("api/[controller]")]
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
                string queryString = "SELECT * FROM PHIEUDATPHONG p WHERE NOT EXISTS ( SELECT * FROM PHANPHONG pp  WHERE pp.MA_PHIEU_DP = p.MA_PHIEU_DP ); ";
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
            try
            {
                await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
                string query = $"Select GIATIEN from LOAIPHONG WHERE LOAIPHONG='{DP.LOAIPHONG}'";
                int giatien = await sqlConnection.QueryFirstOrDefaultAsync<int>(query);
                query = $"Select GIA from GOIDICHVU WHERE MA_GOIDV='{DP.MA_GOIDV}'";
                int giatiendv = await sqlConnection.QueryFirstOrDefaultAsync<int>(query);
                DP.TIEN_COC = (giatien + giatiendv) * 0.3;
                DP.TONG_TIEN = giatien + giatiendv;
                DP.NGAY_DAT = DateTime.Now;

                string queryStr = @"INSERT INTO DBO.PHIEUDATPHONG VALUES (@MA_PHIEU_DP, @MA_KH, 
                @MA_NV, @NGAY_DAT, @TONG_TIEN,@TIEN_COC,@LOAIPHONG,@NGAY_TRA_PHONG, @SO_DEM_LUU_TRU, @MA_GOIDV,'Booked')";

                var count = await sqlConnection.QueryAsync("Select * from PHIEUDATPHONG");
                if (count == null) return NotFound();
                int maxId = count.Count() + 1;
                string newId = "DP";
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

                DP.MA_PHIEU_DP = newId;
                await sqlConnection.ExecuteAsync(queryStr, DP);
                return Ok(query + queryStr);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}