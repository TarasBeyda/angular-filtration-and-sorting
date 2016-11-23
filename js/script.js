$(document).ready(function () {
    $('ul.live__filter').liveFilter('slide');
});
var myApp = angular.module('myApp',[]);
var data = {
	row: [
	{
		nameRow: 'Аеропорт',
        inf: 'Довідка',
        numb: '229-81-12'
	},
	{
		nameRow: 'Ремонту',
        inf: 'Відділ',
        numb: '1575'
	},
    {
		nameRow: 'Приміський вокзал',
        inf: 'Довідка',
        numb: '226-10-06'
	},
	{
		nameRow: 'Міліція',
        inf: 'Довідка',
        numb: '258-61-33'
	},
	{
		nameRow: 'Міська рада',
        inf: 'Довідка',
        numb: '297-57-95'
	},
	{
		nameRow: 'Міста',
        inf: 'Гаряча лінія',
        numb: '1580'
	},	
    {
		nameRow: 'Податкова інспекція',
        inf: 'Довідка',
        numb: '297-39-04'
	},        
    {
		nameRow: 'Туристична інформація',
        inf: 'Центр',
        numb: '297-55-55'
	},    
    {
		nameRow: 'Укртелекому',
        inf: 'Довідка',
        numb: '(0-800) 506-800'
	}
	]
};
myApp.controller('RowCtrl', function(){
    this.data = data;
    this.add = function() {
        $('.popUpAdd').css('display', 'block');
        $('.bg ').css('display', 'block');
    }
    this.addRow = function(){
        if (this.newNameRow == '' && this.newInf == '' && this.newNumb == '') {
            return;
        } else {
            this.data.row.push({
                nameRow: this.newNameRow,
                inf: this.newInf,
                numb: this.newNumb
            });
        }
        $('.popUpAdd').css('display', 'none');
        $('.bg ').css('display', 'none');
        this.newNameRow = '';
        this.newInf = '';
        this.newNumb = '';
    };
    this.removeRow = function(key){
        var indexOfRemove = this.data.row.indexOf(key);
        this.data.row.splice(indexOfRemove, 1);
    };
    this.editRow = function(key){
        $('.edit').css('display', 'block');
        $('.bg ').css('display', 'block');
        var indexOfEdit = this.data.row.indexOf(key);
        this.saveEdit = function(){
            this.data.row.splice(indexOfEdit, 1, {
                nameRow: this.editName,
                inf: this.editInf,
                numb: this.editNumb
            });
            $('.edit').css('display', ' none');
            $('.bg ').css('display', 'none');
            this.editName = '';
            this.editInf = '';
            this.editNumb = '';
        }
    };
    this.sort = '';
    this.sortRowName = function(){
        this.sort = 'nameRow';
    };
    this.sortRowInf = function(){
        this.sort = 'inf';
    };
});