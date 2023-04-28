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
				string query = $"Select GIATIEN from LOAIPHONG WHERE LOAIPHONG='{DP.Loaiphong}'";
				int giatien = await sqlConnection.QueryFirstOrDefaultAsync<int>(query);
                query = $"Select GIA from GOIDICHVU WHERE MA_GOIDV='{DP.MaGoidv}'";
                int giatiendv = await sqlConnection.QueryFirstOrDefaultAsync<int>(query);
                DP.TienCoc = (giatien+giatiendv) * 0.3;
				DP.NgayDat = DateTime.Now;
				string queryStr = @"INSERT INTO DBO.PHIEUDATPHONG VALUES (@MaPhieuDp, @MaKh, 
                @MaNv, @NgayDat, @TongTien,@TienCoc,@Loaiphong,@NgayTraPhong, @SoDemLuuTru, @MaGoidv,'Booked')";

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

				DP.MaPhieuDp = newId;
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
