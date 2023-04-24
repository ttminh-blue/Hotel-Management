using Dapper;
using lazy_days_API.Models;
using lazy_days_API.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace lazy_days_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class NhanViensController : ControllerBase
	{
		private readonly IService _connectionFactory;

		public NhanViensController(IService connection)
		{
			_connectionFactory = connection;
		}

		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
			try
			{
				await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
				string queryString = "Select * from NHANVIEN";
				var result = await sqlConnection.QueryAsync(queryString);
				if (result == null) return NotFound();
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpGet("{Id}")]
		public async Task<IActionResult> Get([FromRoute] string Id)
		{
			try
			{
				await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
				string queryString = "Select * from Nhanvien where Ma_NV = @Id";
				var result = await sqlConnection.QueryAsync(queryString, new
				{
					Id = Id,
				});
				if (result == null) return NotFound();
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpPost]
		public async Task<IActionResult> AddNhanVien(Nhanvien nhanvien)
		{
			try
			{
				await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
				var allNhanVien = await sqlConnection.QueryAsync("Select * from NHANVIEN");
				if (allNhanVien == null) return NotFound();
				int maxId = allNhanVien.Count() + 1;
				string newId = "NV";
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

				nhanvien.MaNv = newId;

				string queryStr = "Insert into NhanVien(MA_NV, TEN_NV, CHUC_VU, EMAIL, " +
					"GIOI_TINH, SDT, CMND, NGAY_SINH, NGAY_THAM_GIA, DIA_CHI, LUONG) " +
					"VALUES (@MaNv, @TenNv, @ChucVu, @Email, @GioiTinh, @Sdt, @Cmnd, @NgaySinh, @NgayThamGia, @DiaChi, @Luong)";

				await sqlConnection.ExecuteAsync(queryStr, nhanvien);

				return Ok("Added successfully.");
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
	}
}
