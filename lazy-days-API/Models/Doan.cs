namespace lazy_days_API.Models
{
    public class Doan
    {
        public string MA_DOAN { get; set; }
        public string TEN_DOAN { get; set; }
        public string TEN_NGUOI_DK { get; set; }
        public DateTime NGAY_DEN { get; set; } = DateTime.Now;
        public int SO_NGUOI { get; set; } = 0;
        public int SO_DEM_LUU_TRU { get; set; }
    }
}