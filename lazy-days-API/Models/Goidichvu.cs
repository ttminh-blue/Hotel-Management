using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("GOIDICHVU")]
public partial class Goidichvu
{
    [Key]
    [Column("MA_GOIDV")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaGoidv { get; set; } = null!;

    [Column("GIA")]
    public double? Gia { get; set; }

    [InverseProperty("MaGoidvNavigation")]
    public virtual ICollection<Chitietgdv> Chitietgdvs { get; } = new List<Chitietgdv>();

    [InverseProperty("MaGoiDvNavigation")]
    public virtual ICollection<Phieudatphong> Phieudatphongs { get; } = new List<Phieudatphong>();
}
