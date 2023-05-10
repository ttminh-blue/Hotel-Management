namespace lazy_days_API.Models
{
	public class AssignmentRoom
	{
		public string TRANG_THAI_PDP { get; set; } = String.Empty;
		public string NGAY_PHAN_PHONG { get; set; } = String.Empty;
		public string NGAY_NHAN { get; set; } = String.Empty;
		public string MA_PHIEU_DP { get; set; } = String.Empty;
		public string TEN_KH { get; set; } = String.Empty;
		public string SDT { get; set; } = String.Empty;
		public int? SO_DEM_LUU_TRU { get; set; } = 0;
		public string YEU_CAU_DB { get; set; } = String.Empty;
		public string TRANG_THAI_DAT_PHONG { get; set; } = String.Empty;
		public string MA_PHONG { get; set; } = String.Empty;
		public string TEN_PHONG { get; set; } = String.Empty;
		public int? SO_LUONG_DAP_UNG { get; set; } = 0;
		public string LOAI { get; set; } = String.Empty;
		public string TRANG_THAI { get; set; } = String.Empty;
		public string DIADIEM { get; set; } = String.Empty;
		public string MA_KH { get; set; } = String.Empty;
	}
}
