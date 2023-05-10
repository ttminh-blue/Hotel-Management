namespace lazy_days_API.Models;

public class Khachhang
{
	public string MA_KH { get; set; } = null!;

	public string? TEN_KH { get; set; }

	public string? CMND { get; set; }

	public string? DIA_CHI { get; set; }

	public string? SDT { get; set; }

	public string? Email { get; set; }

	public string? Fax { get; set; }

	public int? SO_DEM_LUU_TRU { get; set; }

	public string? YEU_CAU_DB { get; set; }

	public string? TRANG_THAI_DAT_PHONG { get; set; }
}