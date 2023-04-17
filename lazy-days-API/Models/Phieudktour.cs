using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("PHIEUDKTOUR")]
public partial class Phieudktour
{
    [Key]
    [Column("MA_P")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaP { get; set; } = null!;

    [Column("NGAYDANGKY", TypeName = "date")]
    public DateTime? Ngaydangky { get; set; }

    [Column("TENNGUOIDK")]
    [StringLength(50)]
    public string? Tennguoidk { get; set; }

    [Column("THOIGIANKHOIHANG", TypeName = "datetime")]
    public DateTime? Thoigiankhoihang { get; set; }

    [Column("SONGUOITHAMGIA")]
    public int? Songuoithamgia { get; set; }

    [Column("DICHVUDUADON")]
    [StringLength(50)]
    public string? Dichvuduadon { get; set; }

    [Column("TRANGTHAI")]
    [StringLength(20)]
    public string? Trangthai { get; set; }

    [Column("MA_TOUR")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaTour { get; set; }

    [Column("MA_KH")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaKh { get; set; }

    [Column("MA_NV")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaNv { get; set; }

    [ForeignKey("MaKh")]
    [InverseProperty("Phieudktours")]
    public virtual Khachhang? MaKhNavigation { get; set; }

    [ForeignKey("MaNv")]
    [InverseProperty("Phieudktours")]
    public virtual Nhanvien? MaNvNavigation { get; set; }

    [ForeignKey("MaTour")]
    [InverseProperty("Phieudktours")]
    public virtual Tourdulich? MaTourNavigation { get; set; }
}
