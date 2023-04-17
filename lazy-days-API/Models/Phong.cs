using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("PHONG")]
public partial class Phong
{
    [Key]
    [Column("MA_PHONG")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaPhong { get; set; } = null!;

    [Column("TEN_PHONG")]
    [StringLength(100)]
    public string? TenPhong { get; set; }

    [Column("SO_LUONG_DAP_UNG")]
    public int? SoLuongDapUng { get; set; }

    [Column("LOAI")]
    [StringLength(30)]
    public string? Loai { get; set; }

    [Column("TRANG_THAI")]
    public bool? TrangThai { get; set; }

    [Column("GIA")]
    public int? Gia { get; set; }

    [InverseProperty("MaPhongNavigation")]
    public virtual ICollection<Phancongdonvesinh> Phancongdonvesinhs { get; } = new List<Phancongdonvesinh>();

    [InverseProperty("MaPhongNavigation")]
    public virtual ICollection<Phanphong> Phanphongs { get; } = new List<Phanphong>();

    [InverseProperty("MaPhongNavigation")]
    public virtual ICollection<Phieudangkyvanchuyen> Phieudangkyvanchuyens { get; } = new List<Phieudangkyvanchuyen>();
}
