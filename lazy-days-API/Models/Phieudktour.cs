using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public class Phieudktour
{
    public string MAPDKTOUR { get; set; } = null!;

    public DateTime? THOIGIANDANGKY { get; set; }

    public string? TENNGUOIDK { get; set; }
    public string? SDT { get; set; }

    
    public DateTime? THOIGIANKHOIHANH { get; set; }

    public string? EMAIL { get; set; }
    public string? CMND { get; set; }

    
    public int? SONGUOITG { get; set; }

    public string? DICHVUDUADON { get; set; }

    public string? TRANGTHAI { get; set; }

    public string? YEUCAUDACBIET { get; set; }


    public string? MaTour { get; set; }


    public string? MaNv { get; set; }
}


public class TTNTG
{
    public string? MAPDKTOUR { get; set; } = null!;
    public int? STT { get; set; } = null;
    public string? SDT { get; set; } = null;
    public string? TENNGUOITG { get; set; } = null;
}

public class TTDK
{
    public string? fullName { get; set; } = null;
    public string? phone { get; set; } = null;
    public int? numberJoin { get; set; } = null;
    public string? email { get; set; } = null;
    public DateTime? departureDay { get; set; } = null;
    public string? idCard { get; set; } = null;
    public DateTime? registerDate { get; set; } = null;
    public string? request { get; set; } = null;
    public string? shuttle { get; set; } = null;
}

public class FormTour
{
    public string? data1 { get; set; }
    public List<TTNTG> data2 { get; set; }
    public TTDK data3 { get; set; }
}