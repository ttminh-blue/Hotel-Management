using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("PHIEUDATPHONG")]
public partial class Phieudatphong
{
    [Key]
    [Column("MA_PHIEU_DP")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaPhieuDp { get; set; } = null!;

    [Column("MA_KH")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaKh { get; set; }

    [Column("MA_NV")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaNv { get; set; }

    [Column("NGAY_DAT", TypeName = "datetime")]
    public DateTime? NgayDat { get; set; }

    [Column("TONG_TIEN")]
    public double? TongTien { get; set; }

    [Column("TIEN_COC")]
    public double? TienCoc { get; set; }

    [Column("LOAIPHONG")]
    [StringLength(20)]
    public string? Loaiphong { get; set; }

    [Column("MA_GOI_DV")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaGoiDv { get; set; }

    [Column("NGAY_TRA_PHONG", TypeName = "datetime")]
    public DateTime? NgayTraPhong { get; set; }

    [InverseProperty("MaPhieuDpNavigation")]
    public virtual ICollection<Hoadon> Hoadons { get; } = new List<Hoadon>();

    [ForeignKey("MaGoiDv")]
    [InverseProperty("Phieudatphongs")]
    public virtual Goidichvu? MaGoiDvNavigation { get; set; }

    [ForeignKey("MaKh")]
    [InverseProperty("Phieudatphongs")]
    public virtual Khachhang? MaKhNavigation { get; set; }

    [ForeignKey("MaNv")]
    [InverseProperty("Phieudatphongs")]
    public virtual Nhanvien? MaNvNavigation { get; set; }

    [InverseProperty("MaPhieuDpNavigation")]
    public virtual ICollection<Phanphong> Phanphongs { get; } = new List<Phanphong>();

    [InverseProperty("MaPhieuDpNavigation")]
    public virtual ICollection<Phieudangkydichvu> Phieudangkydichvus { get; } = new List<Phieudangkydichvu>();
}
