namespace lazy_days_API.Models;

public partial class Phanphong
{
	public string? MA_NVQL { get; set; }

	public string MA_PHIEU_DP { get; set; } = null!;

	public string MA_PHONG { get; set; } = null!;

	public DateTime? NGAY_PHAN_PHONG { get; set; }

	public DateTime? NGAY_NHAN { get; set; }

}
