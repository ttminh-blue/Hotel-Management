using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[PrimaryKey("MaNv", "MaPhong")]
[Table("PHANCONGDONVESINH")]
public partial class Phancongdonvesinh
{
    [Key]
    [Column("MA_NV")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaNv { get; set; } = null!;

    [Key]
    [Column("MA_PHONG")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaPhong { get; set; } = null!;

    [Column("NGAY_LAM", TypeName = "datetime")]
    public DateTime? NgayLam { get; set; }

    [ForeignKey("MaNv")]
    [InverseProperty("Phancongdonvesinhs")]
    public virtual Nhanvien MaNvNavigation { get; set; } = null!;

    [ForeignKey("MaPhong")]
    [InverseProperty("Phancongdonvesinhs")]
    public virtual Phong MaPhongNavigation { get; set; } = null!;
}
