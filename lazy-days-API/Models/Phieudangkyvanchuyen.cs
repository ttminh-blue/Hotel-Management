namespace lazy_days_API.Models;

public partial class Phieudangkyvanchuyen
{
	public string MA_PHIEUDANGKYVANCHUYEN { get; set; } = null!;

	public string? MA_PHONG { get; set; }

	public string? MA_PHIEU_DP { get; set; }

	public string? MA_NV { get; set; }

	public DateTime? NGAY_TAO { get; set; }

	public string? HANH_LY { get; set; }

	public int? SO_LUONG { get; set; }

}
