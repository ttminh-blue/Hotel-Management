using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("TAIKHOAN")]
public partial class Taikhoan
{
    [Key]
    [Column("MA_TAIKHOAN")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaTaikhoan { get; set; } = null!;

    [Column("TEN_TAIKHOAN")]
    [StringLength(50)]
    public string? TenTaikhoan { get; set; }

    [Column("MATKHAU")]
    [StringLength(50)]
    public string? Matkhau { get; set; }

    [Column("MA_NV")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaNv { get; set; }

    [ForeignKey("MaNv")]
    [InverseProperty("Taikhoans")]
    public virtual Nhanvien? MaNvNavigation { get; set; }
}
