// js Document

    // Created on   : 11/04/2019.
    // Theme Name   : Cryptonet - Cryptocurrency Landing Page.
    // Version      : 1.0.
    // Author       : @Heloshape.



(function($) {
    "use strict";
    
    
    $(document).on ('ready', function (){
        
        
        // -------------------- Remove Placeholder When Focus Or Click
        $("input,textarea").each( function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });     
        });
        
    });
    
})(jQuery)