using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[PrimaryKey("MaGoidv", "MaDv")]
[Table("CHITIETGDV")]
public partial class Chitietgdv
{
    [Key]
    [Column("MA_GOIDV")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaGoidv { get; set; } = null!;

    [Key]
    [Column("MA_DV")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaDv { get; set; } = null!;

    [Column("GIAMGIA")]
    public int? Giamgia { get; set; }

    [ForeignKey("MaDv")]
    [InverseProperty("Chitietgdvs")]
    public virtual Dichvukhachsan MaDvNavigation { get; set; } = null!;

    [ForeignKey("MaGoidv")]
    [InverseProperty("Chitietgdvs")]
    public virtual Goidichvu MaGoidvNavigation { get; set; } = null!;
}
