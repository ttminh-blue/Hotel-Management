using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[PrimaryKey("MaHd", "MaPhieudv")]
[Table("CHITIETTHANHTOANDV")]
public partial class Chitietthanhtoandv
{
    [Key]
    [Column("MA_HD")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaHd { get; set; } = null!;

    [Key]
    [Column("MA_PHIEUDV")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaPhieudv { get; set; } = null!;

    [Column("DON_GIA")]
    public double? DonGia { get; set; }

    [Column("MA_KETOAN")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaKetoan { get; set; }

    [ForeignKey("MaHd")]
    [InverseProperty("Chitietthanhtoandvs")]
    public virtual Hoadon MaHdNavigation { get; set; } = null!;

    [ForeignKey("MaKetoan")]
    [InverseProperty("Chitietthanhtoandvs")]
    public virtual Nhanvien? MaKetoanNavigation { get; set; }

    [ForeignKey("MaPhieudv")]
    [InverseProperty("Chitietthanhtoandvs")]
    public virtual Phieudangkydichvu MaPhieudvNavigation { get; set; } = null!;
}
