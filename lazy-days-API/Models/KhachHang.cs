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

    [InverseProperty("MaKhNavigation")]
    public virtual ICollection<Chitietdoan> Chitietdoans { get; } = new List<Chitietdoan>();

    [InverseProperty("MaKhNavigation")]
    public virtual ICollection<Chitietdulich> Chitietduliches { get; } = new List<Chitietdulich>();

    [InverseProperty("MaKhNavigation")]
    public virtual ICollection<Dondatxe> Dondatxes { get; } = new List<Dondatxe>();

    [InverseProperty("MaKhNavigation")]
    public virtual ICollection<Feedback> Feedbacks { get; } = new List<Feedback>();

    [InverseProperty("MaKhNavigation")]
    public virtual ICollection<Phieudangkyvanchuyen> Phieudangkyvanchuyens { get; } = new List<Phieudangkyvanchuyen>();

    [InverseProperty("MaKhNavigation")]
    public virtual ICollection<Phieudatphong> Phieudatphongs { get; } = new List<Phieudatphong>();

    [InverseProperty("MaKhNavigation")]
    public virtual ICollection<Phieudktour> Phieudktours { get; } = new List<Phieudktour>();

    [InverseProperty("MaKhNavigation")]
    public virtual ICollection<Yeucaudacbiet> Yeucaudacbiets { get; } = new List<Yeucaudacbiet>();
}
