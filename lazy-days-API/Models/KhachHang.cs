using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace lazy_days_API.Models
{
    public class KhachHang
    {
        [Key]
        [Column(TypeName = "CHAR")]
        public string MA_KH { get; set; }
        [Column(TypeName = "NVARCHAR")]
        public string TEN_KH { get; set; }
        [Column(TypeName = "VARCHAR")]
        public string CMND { get; set; }

        [Column(TypeName = "NVARCHAR")]
        public string DIA_CHI { get; set; }
        [Column(TypeName = "VARCHAR")]
        public string Email { get; set; }
        [Column(TypeName = "VARCHAR")]
        public string Fax { get; set; }

        [Column(TypeName = "DATETIME")]
        public DateTime NGAY_DEN { get; set; }

        [Column(TypeName = "int")]
        public int SO_DEM_LUU_TRU { get; set; }

        [Column(TypeName = "varchar")]
        public string LOAI_PHONG { get; set; }
        [Column(TypeName = "CHAR")]
        public string YEU_CAU_DB { get; set; }

        [Column(TypeName = "VARCHAR")]
        public string LOAI_KH { get; set; }
        [Column(TypeName = "NVARCHAR")]
        public string TRANG_THAI_DAT_PHONG { get; set; }
    }
} 