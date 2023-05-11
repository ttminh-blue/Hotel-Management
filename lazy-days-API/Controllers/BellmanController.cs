using Dapper;
using lazy_days_API.Models;
using lazy_days_API.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace lazy_days_API.Controllers
{

	[Route("api/[controller]")]
	[ApiController]
	public class BellmanController : ControllerBase
	{
		private readonly IService _service;

		public BellmanController(IService service)
		{
			_service = service;
		}



		[HttpGet("assignment_rooms")]
		public async Task<IActionResult> GetAssignmentRooms()
		{
			try
			{
				await using SqlConnection sqlConnection = _service.CreateConnection();
				string queryStr = "SELECT PDP.TRANGTHAI AS TRANG_THAI_PDP, PP.NGAY_PHAN_PHONG, PP.NGAY_NHAN, PP.MA_PHIEU_DP, KH.TEN_KH, KH.SDT, KH.SO_DEM_LUU_TRU, KH.YEU_CAU_DB, KH.TRANG_THAI_DAT_PHONG, P.* " +
							"FROM PHANPHONG PP JOIN PHONG P ON PP.MA_PHONG = P.MA_PHONG "
							+ "JOIN PHIEUDATPHONG PDP ON PDP.MA_PHIEU_DP = PP.MA_PHIEU_DP " +
							"JOIN KHACHHANG KH ON KH.MA_KH = PDP.MA_KH ";
				var result = await sqlConnection.QueryAsync<AssignmentRoom>(queryStr);
				if (result == null) return NotFound("Result empty.");
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpGet("assignment_room")]
		public async Task<IActionResult> GetAssignmentRoom([FromQuery] string id, [FromQuery] string roomId)
		{
			try
			{
				await using SqlConnection sqlConnection = _service.CreateConnection();
				string queryStr = "SELECT PDP.TRANGTHAI AS TRANG_THAI_PDP, PP.NGAY_PHAN_PHONG, PP.NGAY_NHAN, PP.MA_PHIEU_DP, KH.TEN_KH, KH.SDT, KH.SO_DEM_LUU_TRU, KH.YEU_CAU_DB, KH.TRANG_THAI_DAT_PHONG, P.*" +
					" FROM PHANPHONG PP JOIN PHONG P ON PP.MA_PHONG = P.MA_PHONG " +
					"JOIN PHIEUDATPHONG PDP ON PDP.MA_PHIEU_DP = PP.MA_PHIEU_DP " +
					"JOIN KHACHHANG KH ON KH.MA_KH = PDP.MA_KH " +
					"WHERE PP.MA_PHIEU_DP = @MaPhieuDP AND PP.MA_PHONG = @MaPhong";
				var result = await sqlConnection.QueryFirstOrDefaultAsync<AssignmentRoom>(queryStr, new
				{
					MaPhieuDP = id,
					MaPhong = roomId
				});
				if (result == null) return NotFound();
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}


		[HttpPut("confirm_occupied/{id}")]
		public async Task<IActionResult> ConfirmOccupied([FromRoute] string id)
		{
			try
			{
				await using SqlConnection sqlConnection = _service.CreateConnection();
				string queryStr = "update PHIEUDATPHONG set TRANGTHAI = 'Occupied' " +
					"Where MA_PHIEU_DP = @MaPhieuDP";
				await sqlConnection.ExecuteAsync(queryStr, new
				{
					MaPhieuDP = id
				});
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpGet("cleanning_requests")]
		public async Task<IActionResult> GetCleanningRequest()
		{
			try
			{
				await using SqlConnection sqlConnection = _service.CreateConnection();
				var result = await sqlConnection.QueryAsync("Select * from PHANCONGDONVESINH");
				if (result == null) return NotFound();
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpGet("cleanning_requests/{id}")]
		public async Task<IActionResult> GetCleanningRequest([FromRoute] string id)
		{
			try
			{
				await using SqlConnection sqlConnection = _service.CreateConnection();
				var result = await sqlConnection.QueryFirstOrDefaultAsync("Select * from PHANCONGDONVESINH where MA_PCDVS = @Id", new
				{
					Id = id
				});
				if (result == null) return NotFound();
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpPost("cleanning_request")]
		public async Task<IActionResult> AddCleanningRequest(Phancongdonvesinh phancongdonvesinh)
		{
			try
			{
				await using SqlConnection sqlConnection = _service.CreateConnection();

				var allCleanningRequest = await sqlConnection.QueryAsync("Select * from PHANCONGDONVESINH");
				if (allCleanningRequest == null) return NotFound();
				int maxId = allCleanningRequest.Count() + 1;
				string newId = "VS";
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

				phancongdonvesinh.MaPcdvs = newId;

				await sqlConnection.ExecuteAsync("Insert into PHANCONGDONVESINH(MA_PCDVS, MA_NVBELLMAN, MA_NVVS, MA_PHONG, THOIGIANBD, THOIGIANKT)  " +
					"VALUES (@MaPcdvs, @MaNvbellman, NULL, @MaPhong, GETDATE(), NULL)", phancongdonvesinh);

				return Ok("Add cleanning request successfully.");
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}



		[HttpPost("baggage_request")]
		public async Task<IActionResult> AddBaggageRequest(Phieudangkyvanchuyen phieudangkyvanchuyen)
		{
			try
			{
				await using SqlConnection sqlConnection = _service.CreateConnection();

				var allBaggageRequests = await sqlConnection.QueryAsync("Select * from PHIEUDANGKYVANCHUYEN");
				if (allBaggageRequests == null) return NotFound();
				int maxId = allBaggageRequests.Count() + 1;
				string newId = "VC";
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

				phieudangkyvanchuyen.MA_PHIEUDANGKYVANCHUYEN = newId;


				string sqlStr = "INSERT INTO PHIEUDANGKYVANCHUYEN VALUES(@MA_PHIEUDANGKYVANCHUYEN, @MA_PHONG, @MA_PHIEU_DP, @MA_NV, GetDate(), @HANH_LY,  @SO_LUONG)";

				await sqlConnection.ExecuteAsync(sqlStr, phieudangkyvanchuyen);
				return Ok("Added baggage request successfully.");
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpGet("baggage_requests")]
		public async Task<IActionResult> GetBaggageForms()
		{
			try
			{
				await using SqlConnection sqlConnection = _service.CreateConnection();
				var result = await sqlConnection.QueryAsync("SELECT  VC.MA_PHIEUDANGKYVANCHUYEN, VC.NGAY_TAO, VC.HANH_LY, " +
					"VC.SO_LUONG, KH.TEN_KH, KH.SDT, P.TEN_PHONG, NV.TEN_NV, NV.CHUC_VU " +
					"FROM PHIEUDANGKYVANCHUYEN VC JOIN PHANPHONG PP ON PP.MA_PHIEU_DP = VC.MA_PHIEU_DP AND PP.MA_PHONG = VC.MA_PHONG " +
					"JOIN PHIEUDATPHONG PDP ON PDP.MA_PHIEU_DP = PP.MA_PHIEU_DP " +
					"JOIN KHACHHANG KH ON KH.MA_KH = PDP.MA_KH " +
					"JOIN PHONG P ON P.MA_PHONG = PP.MA_PHONG " +
					"JOIN NHANVIEN NV ON NV.MA_NV = VC.MA_NV");
				if (result == null) return NotFound();
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}




	}
}
