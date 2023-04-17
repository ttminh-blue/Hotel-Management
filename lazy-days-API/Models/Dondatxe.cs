using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("DONDATXE")]
public partial class Dondatxe
{
    [Key]
    [Column("MA_DON_DAT_XE")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaDonDatXe { get; set; } = null!;

    [Column("MA_KH")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaKh { get; set; }

    [Column("MA_DONVIVANCHUYEN")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaDonvivanchuyen { get; set; }

    [Column("MA_NV")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaNv { get; set; }

    [Column("BANG_SO_XE")]
    [StringLength(10)]
    public string? BangSoXe { get; set; }

    [Column("NGAY_DAT")]
    [StringLength(10)]
    public string? NgayDat { get; set; }

    [ForeignKey("MaDonvivanchuyen")]
    [InverseProperty("Dondatxes")]
    public virtual Donvivanchuyen? MaDonvivanchuyenNavigation { get; set; }

    [ForeignKey("MaKh")]
    [InverseProperty("Dondatxes")]
    public virtual Khachhang? MaKhNavigation { get; set; }

    [ForeignKey("MaNv")]
    [InverseProperty("Dondatxes")]
    public virtual Nhanvien? MaNvNavigation { get; set; }
}
