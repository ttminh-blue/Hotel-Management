using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("TOURDULICH")]
public partial class Tourdulich
{
    [Key]
    [Column("MA_TOUR")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaTour { get; set; } = null!;

    [Column("TEN_TOUR")]
    [StringLength(5)]
    [Unicode(false)]
    public string? TenTour { get; set; }

    [Column("MOTA")]
    [StringLength(50)]
    public string? Mota { get; set; }

    [Column("GIA")]
    public double? Gia { get; set; }

    [Column("MA_DV")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaDv { get; set; }

    [ForeignKey("MaDv")]
    [InverseProperty("Tourduliches")]
    public virtual Donviluuhanh? MaDvNavigation { get; set; }

    [InverseProperty("MaTourNavigation")]
    public virtual ICollection<Phieudktour> Phieudktours { get; } = new List<Phieudktour>();
}
