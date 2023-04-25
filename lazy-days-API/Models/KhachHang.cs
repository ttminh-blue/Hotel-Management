using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public  class Khachhang
public partial class Khachhang
   
    [Key]
    [Column("MA_KH")]

    [Unicode(false)]
    public string MaKh { get; set; } = null!;
  
    [Column("TEN_KH")]
    [StringLength(100)]


    [Column("CMND")]

    [Unicode(false)]
    public string? Cmnd { get; set; }

    [Column("DIA_CHI")]
    [StringLength(100)]


    [Column("SDT")]
    public DateTime? NgayDen { get; set; }

    public string? Sdt { get; set; }


    public string? LoaiPhong { get; set; }


    [StringLength(10)]
    [Unicode(false)]

    public string? LoaiKh { get; set; }



    [Column("SO_DEM_LUU_TRU")]
   // public Doan? doan { get; set; }

    //public Chitietdoan? ct_Doan { get; set; }
    [StringLength(50)]
    //public Congtydulich? ctydulich { get; set; }
    public string? LoaiPhong { get; set; }
    //public Chitietdulich? ct_dulich { get; set; }
    [Column("YEU_CAU_DB")]
   // public Feedback? feedback { get; set; }
    [Unicode(false)]
   // public Yeucaudacbiet? yeucaudacbiet { get; set; }

    [Column("LOAI_KH")]
    [StringLength(50)]
    [Unicode(false)]
    public string? LoaiKh { get; set; }

    [Column("CHUC_VU")]
    [StringLength(50)]
    [Unicode(false)]
    public string? ChucVu { get; set; }

    [Column("TRANG_THAI_DAT_PHONG")]
    [StringLength(50)]
    public string? TrangThaiDatPhong { get; set; }

    public Doan? doan { get; set; }

    public Chitietdoan? ct_Doan { get; set; }

    public Congtydulich? ctydulich { get; set; }

    public Chitietdulich? ct_dulich { get; set; }

    public Feedback? feedback { get; set; }

    public Yeucaudacbiet? yeucaudacbiet { get; set; }

    public virtual ICollection<Congtydulich> MaCties { get; } = new List<Congtydulich>();

    public virtual ICollection<Doan> MaDoans { get; } = new List<Doan>();
}
