using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public class Dichvukhachsan
{
    [Key]
    [Column("MA_DV")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaDv { get; set; } = null!;

    [Column("TENDICHVU")]
    [StringLength(50)]
    public string? Tendichvu { get; set; }

    public double? Gia { get; set; }

    [Column("DIADIEM")]
    [StringLength(50)]
    public string? Diadiem { get; set; }

    [InverseProperty("MaDvNavigation")]
    public virtual ICollection<Chitietgdv> Chitietgdvs { get; } = new List<Chitietgdv>();

    [InverseProperty("MaDvNavigation")]
    public virtual ICollection<Phieudangkydichvu> Phieudangkydichvus { get; } = new List<Phieudangkydichvu>();
}
