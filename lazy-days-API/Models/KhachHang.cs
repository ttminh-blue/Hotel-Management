using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("KHACHHANG")]
public partial class Khachhang
{
    [Key]
    [Column("MA_KH")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaKh { get; set; } = null!;

    [Column("TEN_KH")]
    [StringLength(100)]
    public string? TenKh { get; set; }

    [Column("CMND")]
    [StringLength(50)]
    [Unicode(false)]
    public string? Cmnd { get; set; }

    [Column("DIA_CHI")]
    [StringLength(100)]
    public string? DiaChi { get; set; }

    [Column("SDT")]
    [StringLength(10)]
    [Unicode(false)]
    public string? Sdt { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string? Email { get; set; }

    [StringLength(10)]
    [Unicode(false)]
    public string? Fax { get; set; }

    [Column("NGAY_DEN", TypeName = "datetime")]
    public DateTime? NgayDen { get; set; }

    [Column("SO_DEM_LUU_TRU")]
    public int? SoDemLuuTru { get; set; }

    [Column("LOAI_PHONG")]
    [StringLength(50)]
    [Unicode(false)]
    public string? LoaiPhong { get; set; }

    [Column("YEU_CAU_DB")]
    [StringLength(5)]
    [Unicode(false)]
    public string? YeuCauDb { get; set; }

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


}
