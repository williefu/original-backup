<?php
defined('_JEXEC') or die();

$document = &JFactory::getDocument();
$document->addScript("http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");

require_once(JPATH_COMPONENT.DS.'SweepstakesController.php');

$controller	= new SweepstakesController();
$controller->execute(JRequest::getVar('task'));
$controller->redirect();

?>