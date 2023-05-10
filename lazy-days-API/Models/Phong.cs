namespace lazy_days_API.Models;

public partial class Phong
{
	public string MA_PHONG { get; set; } = null!;

	public string? TEN_PHONG { get; set; }

	public int? SO_LUONG_DAP_UNG { get; set; }

	public string? LOAI { get; set; }

	public string? TRANG_THAI { get; set; }

	public string DIADIEM { get; set; }

}
