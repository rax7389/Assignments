$(document).ready(function(){
	var s;
	var arr=[
					[0,0,0,2,6,0,7,0,1,6,8,0,0,7,0,0,9,0,1,9,0,0,0,4,5,0,0,8,2,0,1,0,0,0,4,0,0,0,4,6,0,2,9,0,0,0,5,0,0,0,3,0,2,8,0,0,9,3,0,0,0,7,4,0,4,0,0,5,0,0,3,6,7,0,3,0,1,8,0,0,0],
					[1,0,0,4,8,9,0,0,6,7,3,0,0,0,0,0,4,0,0,0,0,0,0,1,2,9,5,0,0,7,1,2,0,6,0,0,5,0,0,7,0,3,0,0,8,0,0,6,0,9,5,7,0,0,9,1,4,6,0,0,0,0,0,0,2,0,0,0,0,0,3,7,8,0,0,5,1,2,0,0,4],
					[0,2,0,6,0,8,0,0,0,5,8,0,0,0,9,7,0,0,0,0,0,0,4,0,0,0,0,3,7,0,0,0,0,5,0,0,6,0,0,0,0,0,0,0,4,0,0,8,0,0,0,0,1,3,0,0,0,0,2,0,0,0,0,0,0,9,8,0,0,0,3,6,0,0,0,3,0,6,0,9,0],
					[0,0,0,6,0,0,4,0,0,7,0,0,0,0,3,6,0,0,0,0,0,0,9,1,0,8,0,0,0,0,0,0,0,0,0,0,0,5,0,1,8,0,0,0,3,0,0,0,3,0,6,0,4,5,0,4,0,2,0,0,0,6,0,9,0,3,0,0,0,0,0,0,0,2,0,0,0,0,1,0,0],
					[5,3,0,0,7,0,0,0,0,6,0,0,1,9,5,0,0,0,0,9,8,0,0,0,0,6,0,8,0,0,0,6,0,0,0,3,4,0,0,8,0,3,0,0,1,7,0,0,0,2,0,0,0,6,0,6,0,0,0,0,2,8,0,0,0,0,4,1,9,0,0,5,0,0,0,0,8,0,0,7,9],
					[0,0,0,0,0,4,0,9,0,8,0,2,9,7,0,0,0,0,9,0,1,2,0,0,3,0,0,0,0,0,0,4,9,1,5,7,0,1,3,0,5,0,9,2,0,5,7,9,1,2,0,0,0,0,0,0,7,0,0,2,6,0,3,0,0,0,0,3,8,2,0,5,0,2,0,5,0,0,0,0,0],
					[0,2,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,3,0,7,4,0,8,0,0,0,0,0,0,0,0,0,3,0,0,2,0,8,0,0,4,0,0,1,0,6,0,0,5,0,0,0,0,0,0,0,0,0,1,0,7,8,0,5,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,4,0],
					[2,0,0,3,0,0,0,0,0,8,0,4,0,6,2,0,0,3,0,1,3,8,0,0,2,0,0,0,0,0,0,2,0,3,9,0,5,0,7,0,0,0,6,2,1,0,3,2,0,0,6,0,0,0,0,2,0,0,0,9,1,4,0,6,0,1,2,5,0,8,0,9,0,0,0,0,0,1,0,0,2],
					[0,0,0,9,0,4,0,6,1,5,9,4,0,0,0,3,0,0,0,0,0,3,0,0,0,0,9,0,0,0,7,0,1,5,3,0,8,0,7,0,3,0,0,0,0,0,5,0,0,4,0,0,7,0,9,0,0,0,2,0,6,0,7,0,0,5,0,1,9,0,0,0,1,8,0,0,0,0,0,9,0],
					[9,0,6,0,0,0,1,0,0,0,0,8,9,0,1,7,0,0,0,0,0,6,3,0,4,0,9,0,0,0,8,0,2,0,3,0,4,8,3,0,0,0,0,0,6,0,0,0,0,0,6,0,0,1,8,1,0,0,6,0,0,0,0,0,0,0,0,0,5,3,7,4,0,5,7,0,0,0,0,1,0]
					];

	set_values();

	$("#cell-0").keyup(function(){
		check_row(0,"#cell-0");
		check_col(0,71,"#cell-0");
		check_block(0,"#cell-0");
	});
	$("#cell-1").keyup(function(){
		check_row(1,"#cell-1");
		check_col(1,73,"#cell-1");
		check_block(0,"#cell-1");
	});				
	$("#cell-2").keyup(function(){
		check_row(2,"#cell-2");
		check_col(2,74,"#cell-2");
		check_block(0,"#cell-2");
	});
	$("#cell-3").keyup(function(){
		check_row(3,"#cell-3");
		check_col(3,75,"#cell-3");
		check_block(3,"#cell-3");
	});
	$("#cell-4").keyup(function(){
		check_row(4,"#cell-4");
		check_col(4,76,"#cell-4");
		check_block(3,"#cell-4");
	});
	$("#cell-5").keyup(function(){
		check_row(5,"#cell-5");
		check_col(5,77,"#cell-5");
		check_block(3,"#cell-5");
	});
	$("#cell-6").keyup(function(){
		check_row(6,"#cell-6");
		check_col(6,78,"#cell-6");
		check_block(6,"#cell-6");
	});
	$("#cell-7").keyup(function(){
		check_row(7,"#cell-7");
		check_col(7,79,"#cell-7..");
		check_block(6,"#cell-7");
	});
	$("#cell-8").keyup(function(){
		check_row(8,"#cell-8");
		check_col(8,80,"#cell-8");
		check_block(6,"#cell-8");
	});
	$("#cell-9").keyup(function(){
		check_row(9,"#cell-9");
		check_col(0,72,"#cell-9");
		check_block(0,"#cell-9");
	});
	$("#cell-10").keyup(function(){
		check_row(10,"#cell-10");
		check_col(1,73,"#cell-10");
		check_block(0,"#cell-10");
	});
	$("#cell-11").keyup(function(){
		check_row(11,"#cell-11");
		check_col(2,74,"#cell-11");
		check_block(0,"#cell-11");
	});
	$("#cell-12").keyup(function(){
		check_row(12,"#cell-12");
		check_col(3,75,"#cell-12");
		check_block(3,"#cell-12");
	});
	$("#cell-13").keyup(function(){
		check_row(13,"#cell-13");
		check_col(4,76,"#cell-13");
		check_block(3,"#cell-13");
	});
	$("#cell-14").keyup(function(){
		check_row(14,"#cell-14");
		check_col(5,77,"#cell-14");
		check_block(3,"#cell-14");
	});
	$("#cell-15").keyup(function(){
		check_row(15,"#cell-15");
		check_col(6,78,"#cell-15");
		check_block(6,"#cell-15");
	});
	$("#cell-16").keyup(function(){
		check_row(16,"#cell-16");
		check_col(7,79,"#cell-16");
		check_block(6,"#cell-16");
	});
	$("#cell-17").keyup(function(){
		check_row(17,"#cell-17");
		check_col(8,80,"#cell-17");
		check_block(6,"#cell-17");
	});
	$("#cell-18").keyup(function(){
		check_row(18,"#cell-18");
		check_col(0,72,"#cell-18");
		check_block(0,"#cell-18");
	});
	$("#cell-19").keyup(function(){
		check_row(19,"#cell-19");
		check_col(1,73,"#cell-19");
		check_block(0,"#cell-19");
	});
	$("#cell-20").keyup(function(){
		check_row(20,"#cell-20");
		check_col(2,74,"#cell-20");
		check_block(0,"#cell-20");
	});
	$("#cell-21").keyup(function(){
		check_row(21,"#cell-21");
		check_col(3,75,"#cell-21");
		check_block(3,"#cell-21");
	});
	$("#cell-22").keyup(function(){
		check_row(22,"#cell-22");
		check_col(4,76,"#cell-22");
		check_block(3,"#cell-22");
	});
	$("#cell-23").keyup(function(){
		check_row(23,"#cell-23");
		check_col(5,77,"#cell-23");
		check_block(3,"#cell-23");
	});
	$("#cell-24").keyup(function(){
		check_row(24,"#cell-24");
		check_col(6,78,"#cell-24");
		check_block(6,"#cell-24");
	});
	$("#cell-25").keyup(function(){
		check_row(25,"#cell-25");
		check_col(7,79,"#cell-25");
		check_block(6,"#cell-25");
	});
	$("#cell-26").keyup(function(){
		check_row(26,"#cell-26");
		check_col(8,80,"#cell-26");
		check_block(6,"#cell-26");
	});
	$("#cell-27").keyup(function(){
		check_row(27,"#cell-27");
		check_col(0,72,"#cell-27");
		check_block(27,"#cell-27");
	});
	$("#cell-28").keyup(function(){
		check_row(28,"#cell-28");
		check_col(1,73,"#cell-28");
		check_block(27,"#cell-28");
	});
	$("#cell-29").keyup(function(){
		check_row(29,"#cell-29");
		check_col(2,74,"#cell-29");
		check_block(27,"#cell-29");
	});
	$("#cell-30").keyup(function(){
		check_row(30,"#cell-30");
		check_col(3,75,"#cell-30");
		check_block(30,"#cell-30");
	});
	$("#cell-31").keyup(function(){
		check_row(31,"#cell-31");
		check_col(4,76,"#cell-31");
		check_block(30,"#cell-31");
	});
	$("#cell-32").keyup(function(){
		check_row(32,"#cell-32");
		check_col(5,77,"#cell-32");
		check_block(30,"#cell-32");
	});
	$("#cell-33").keyup(function(){
		check_row(33,"#cell-33");
		check_col(6,78,"#cell-33");
		check_block(33,"#cell-33");
	});
	$("#cell-34").keyup(function(){
		check_row(34,"#cell-34");
		check_col(7,79,"#cell-34");
		check_block(33,"#cell-34");
	});
	$("#cell-35").keyup(function(){
		check_row(35,"#cell-35");
		check_col(8,80,"#cell-35");
		check_block(33,"#cell-35");
	});
	$("#cell-36").keyup(function(){
		check_row(36,"#cell-36");
		check_col(0,72,"#cell-36");
		check_block(27,"#cell-36");
	});
	$("#cell-37").keyup(function(){
		check_row(37,"#cell-37");
		check_col(1,73,"#cell-37");
		check_block(27,"#cell-37");
	});
	$("#cell-38").keyup(function(){
		check_row(38,"#cell-38");
		check_col(2,74,"#cell-38");
		check_block(27,"#cell-38");
	});
	$("#cell-39").keyup(function(){
		check_row(39,"#cell-39");
		check_col(3,75,"#cell-39");
		check_block(30,"#cell-39");
	});
	$("#cell-40").keyup(function(){
		check_row(40,"#cell-40");
		check_col(4,76,"#cell-40");
		check_block(30,"#cell-40");
	});
	$("#cell-41").keyup(function(){
		check_row(41,"#cell-41");
		check_col(5,77,"#cell-41");
		check_block(30,"#cell-41");
	});
	$("#cell-42").keyup(function(){
		check_row(42,"#cell-42");
		check_col(6,78,"#cell-42");
		check_block(33,"#cell-42");
	});
	$("#cell-43").keyup(function(){
		check_row(43,"#cell-43");
		check_col(7,79,"#cell-43");
		check_block(33,"#cell-43");
	});
	$("#cell-44").keyup(function(){
		check_row(44,"#cell-44");
		check_col(8,80,"#cell-44");
		check_block(33,"#cell-44");
	});
	$("#cell-45").keyup(function(){
		check_row(45,"#cell-45");
		check_col(0,72,"#cell-45");
		check_block(27,"#cell-45");
	});
	$("#cell-46").keyup(function(){
		check_row(46,"#cell-46");
		check_col(1,75,"#cell-46");
		check_block(27,"#cell-46");
	});
	$("#cell-47").keyup(function(){
		check_row(47,"#cell-47");
		check_col(2,74,"#cell-47");
		check_block(27,"#cell-47");
	});
	$("#cell-48").keyup(function(){
		check_row(48,"#cell-48");
		check_col(3,75,"#cell-48");
		check_block(30,"#cell-48");
	});
	$("#cell-49").keyup(function(){
		check_row(49,"#cell-49");
		check_col(4,76,"#cell-49");
		check_block(30,"#cell-49");
	});
	$("#cell-50").keyup(function(){
		check_row(50,"#cell-50");
		check_col(5,77,"#cell-50");
		check_block(30,"#cell-50");
	});
	$("#cell-51").keyup(function(){
		check_row(51,"#cell-51");
		check_col(6,78,"#cell-51");
		check_block(33,"#cell-51");
	});
	$("#cell-52").keyup(function(){
		check_row(52,"#cell-52");
		check_col(7,79,"#cell-52");
		check_block(33,"#cell-52");
	});
	$("#cell-53").keyup(function(){
		check_row(53,"#cell-53");
		check_col(8,80,"#cell-53");
		check_block(33,"#cell-53");
	});
	$("#cell-54").keyup(function(){
		check_row(54,"#cell-54");
		check_col(0,72,"#cell-54");
		check_block(54,"#cell-54");
	});
	$("#cell-55").keyup(function(){
		check_row(55,"#cell-55");
		check_col(1,73,"#cell-55");
		check_block(54,"#cell-55");
	});
	$("#cell-56").keyup(function(){
		check_row(56,"#cell-56");
		check_col(2,74,"#cell-56");
		check_block(54,"#cell-56");
	});
	$("#cell-57").keyup(function(){
		check_row(57,"#cell-57");
		check_col(3,75,"#cell-57");
		check_block(57,"#cell-57");
	});
	$("#cell-58").keyup(function(){
		check_row(58,"#cell-58");
		check_col(4,76,"#cell-58");
		check_block(57,"#cell-58");
	});
	$("#cell-59").keyup(function(){
		check_row(59,"#cell-59");
		check_col(5,77,"#cell-59");
		check_block(57,"#cell-59");
	});
	$("#cell-60").keyup(function(){
		check_row(60,"#cell-60");
		check_col(6,78,"#cell-60");
		check_block(60,"#cell-60");
	});
	$("#cell-61").keyup(function(){
		check_row(61,"#cell-61");
		check_col(7,79,"#cell-61");
		check_block(60,"#cell-61");
	});
	$("#cell-62").keyup(function(){
		check_row(62,"#cell-62");
		check_col(8,80,"#cell-62");
		check_block(60,"#cell-62");
	});
	$("#cell-63").keyup(function(){
		check_row(63,"#cell-63");
		check_col(0,72,"#cell-63");
		check_block(54,"#cell-63");
	});
	$("#cell-64").keyup(function(){
		check_row(64,"#cell-64");
		check_col(1,73,"#cell-64");
		check_block(54,"#cell-64");
	});
	$("#cell-65").keyup(function(){
		check_row(65,"#cell-65");
		check_col(2,74,"#cell-65");
		check_block(54,"#cell-65");
	});
	$("#cell-66").keyup(function(){
		check_row(66,"#cell-66");
		check_col(3,75,"#cell-66");
		check_block(57,"#cell-66");
	});
	$("#cell-67").keyup(function(){
		check_row(67,"#cell-67");
		check_col(4,76,"#cell-67");
		check_block(57,"#cell-67");
	});
	$("#cell-68").keyup(function(){
		check_row(68,"#cell-68");
		check_col(5,77,"#cell-68");
		check_block(57,"#cell-68");
	});
	$("#cell-69").keyup(function(){
		check_row(69,"#cell-69");
		check_col(6,78,"#cell-69");
		check_block(60,"#cell-69");
	});
	$("#cell-70").keyup(function(){
		check_row(70,"#cell-70");
		check_col(7,79,"#cell-70");
		check_block(60,"#cell-70");
	});
	$("#cell-71").keyup(function(){
		check_row(71,"#cell-71");
		check_col(8,80,"#cell-71");
		check_block(60,"#cell-71");
	});
	$("#cell-72").keyup(function(){
		check_row(72,"#cell-72");
		check_col(0,71,"#cell-72");
		check_block(54,"#cell-72");
	});
	$("#cell-73").keyup(function(){
		check_row(73,"#cell-73");
		check_col(1,73,"#cell-73");
		check_block(54,"#cell-73");
	});
	$("#cell-74").keyup(function(){
		check_row(74,"#cell-74");
		check_col(2,74,"#cell-74");
		check_block(54,"#cell-74");
	});
	$("#cell-75").keyup(function(){
		check_row(75,"#cell-75");
		check_col(3,75,"#cell-75");
		check_block(57,"#cell-75");
	});
	$("#cell-76").keyup(function(){
		check_row(76,"#cell-76");
		check_col(4,76,"#cell-76");
		check_block(57,"#cell-76");
	});
	$("#cell-77").keyup(function(){
		check_row(77,"#cell-77");
		check_col(5,77,"#cell-77");
		check_block(57,"#cell-77");
	});
	$("#cell-78").keyup(function(){
		check_row(78,"#cell-78");
		check_col(6,78,"#cell-78");
		check_block(60,"#cell-78");
	});
	$("#cell-79").keyup(function(){
		check_row(79,"#cell-79");
		check_col(7,79,"#cell-79");
		check_block(60,"#cell-79");
	});
	$("#cell-80").keyup(function(){
		check_row(80,"#cell-80");
		check_col(8,80,"#cell-80");
		check_block(60,"#cell-80");
	});

	function check_row(x,y){
		if(x >= 0 && x<=8)
			row_loop(0,y);
		else if(x>=9 && x<=17)
			row_loop(9,y);
		else if(x>=18 && x<=26)
			row_loop(18,y);
		else if(x>=27 && x<=35)
			row_loop(27,y);
		else if(x>=36 && x<=44)
			row_loop(36,y);
		else if(x>=45 && x<=53)
			row_loop(45,y);
		else if(x>=54 && x<=62)
			row_loop(54,y);
		else if(x>=63 && x<=71)
			row_loop(63,y);
		else if(x>=72 && x<=80)
			row_loop(72,y);
	}

	function check_col(x,y,z){
		for(var i=x; i<=y ;i=i+9){
			s="#cell-" + i;
			if(s==z)
				continue;

			if($(s).val() == $(z).val()){
				$(z).addClass("wrong");
			}
			
			if($(z).val()==''){
				$(z).removeClass("wrong");
			}
		}
	}

	function row_loop(x,z){
		for(var i=x; i<9+x ;i++){
			s="#cell-" + i;
			if(s==z){
				continue;
			}

			if($(s).val() == $(z).val()){
				$(z).addClass("wrong");
			}

			if($(z).val()==''){
				$(z).removeClass("wrong");
			}
		}
	}

	function check_block(x,z){	
		for(var i = 1;i < 10; i++){	
				s="#cell-" + x;
				if($(s).val() == $(z).val() && s!=z){
					$(z).addClass("wrong");
				}

				if($(z).val()==''){
					$(z).removeClass("wrong");
				}

				if(i % 3 == 0)
					x = x + 7;
				else 
					x++;
		}
	}

	function set_values(){
		var i = Math.floor(Math.random() * (9 - 0 + 1) ) + 0;
		for(j = 0;j < 81;j++){
			s="#cell-" + j;
			if(arr[i][j] != 0){
				$(s).val(arr[i][j]);
				$(s).prop('disabled',true);
				$(s).css('background-color','#66b3ff');
			}
			else
				$(s).val('');
		}
	}

	$("button").click(function(){
		location.reload();
	});

	$("input").keyup(function(){
		if($(this).val()==0){
			$(this).val('');
		} 
		if($(this).val()>='A' && $(this).val()<='Z'){
			$(this).val('');
		}
		if($(this).val()>='a' && $(this).val()<='z'){
			$(this).val('');
		} 
	});

});