using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("DONVILUUHANH")]
public partial class Donviluuhanh
{
    [Key]
    [Column("MA_DV")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaDv { get; set; } = null!;

    [Column("TEN_DV")]
    [StringLength(50)]
    public string? TenDv { get; set; }

    [Column("PHI_GT")]
    public double? PhiGt { get; set; }

    [InverseProperty("MaDvNavigation")]
    public virtual ICollection<Tourdulich> Tourduliches { get; } = new List<Tourdulich>();
}
