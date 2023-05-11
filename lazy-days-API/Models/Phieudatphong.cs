namespace lazy_days_API.Models;

public partial class Phieudatphong
{
	public string MA_PHIEU_DP { get; set; } = null!;
	public string MA_KH { get; set; }
	public string MA_NV { get; set; }
	public DateTime? NGAY_DAT { get; set; }
	public double? TONG_TIEN { get; set; }

	public double? TIEN_COC { get; set; }

	public string? LOAIPHONG { get; set; }

	public DateTime? NGAY_TRA_PHONG { get; set; }

	public int? SO_DEM_LUU_TRU { get; set; }

	public string? MA_GOIDV { get; set; }
	public string? TRANGTHAI { get; set; }

}
